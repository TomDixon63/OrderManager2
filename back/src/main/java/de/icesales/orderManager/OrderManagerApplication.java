package de.icesales.orderManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import de.icesales.orderManager.backend.api.ServdeskController;

// security disabled, no login screen, if desired remove "exclude" and add "spring.security.user.name=, spring.security.user.password="
// application.properties
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class OrderManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderManagerApplication.class, args);
		
	}

}
