package de.icesales.orderManager.backend.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;

import de.icesales.orderManager.backend.service.SevdeskService;
import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@RequestMapping("/")
@CrossOrigin
@RestController
@Slf4j
public class ServdeskController {

	// logger
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(ServdeskController.class);

	// sevdesk service
	private final SevdeskService service;

	// constructor
	public ServdeskController(SevdeskService service) {
		this.service = service;
	}

	/* ------------------ Mappings -------------------------------------------- */

	@GetMapping("/kunden")
	public Mono<JsonNode> getAllContacts() {
		log.info("-> getAllContacts() called");
		Mono<JsonNode> contacts = this.service.getAllContacts();
		contacts.subscribe(System.out::println);
		return contacts;
	}

	@GetMapping("/ContactAddress")
	public Mono<JsonNode> getAllContactAddresses() {
		log.info("-> getAllContactAddresses() called");
		Mono<JsonNode> contactAddresses = this.service.getAllContactAddress();
		contactAddresses.subscribe(System.out::println);
		return contactAddresses;
	}

}
