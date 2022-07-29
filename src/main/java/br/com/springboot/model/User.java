package br.com.springboot.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_users")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotEmpty(message = "{user.name.empty}")
    @Size(min = 4, max = 20, message = "{user.name.size}")
    private String name;

    @NotEmpty
    @Email
    private String email;

    @NotEmpty(message = "{user.username.empty}")
    @Size(min = 4, max = 8, message = "{user.username.size}")
    private String username;

    @NotEmpty(message = "{user.password.empty}")
    @Size(min = 4, max = 8, message = "{user.password.size}")
    private String password;
}
