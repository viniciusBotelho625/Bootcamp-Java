package br.com.springboot.Controllers;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.springboot.model.User;
import br.com.springboot.repository.UserRepository;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    public UserController(UserRepository userRepository, PasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    @GetMapping("/{id}")
    public User user(@PathVariable("id") Long id) {

        Optional<User> userFind = this.userRepository.findById(id);

        if (userFind.isPresent()) {
            return userFind.get();
        }

        return null;
    }
    

    @PostMapping("/register")
    public User user(@RequestBody @Valid User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        return this.userRepository.save(user);
    }

    @GetMapping("list")
    public List<User> list() {
        return this.userRepository.findAll();
    }

    @GetMapping("list/{id}")
    public List<User> listMoreThan(@PathVariable("id") Long id) {
        return this.userRepository.findAllMoreThan(id);
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> sign(@RequestBody String email, @RequestBody String password) {

        
        Optional<User> optUser = userRepository.findByEmail(email);
        if(optUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        User user = optUser.get();
        boolean valid = encoder.matches(password, user.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);

    }
}
