package de.icesales.orderManager.backend.service;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.fasterxml.jackson.databind.JsonNode;

import lombok.extern.slf4j.Slf4j;
import reactor.core.publisher.Mono;

@Slf4j
@Service
public class SevdeskService {

	// logger
	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(SevdeskService.class);

	private final static String BASE_URL = "https://my.sevdesk.de/api/v1";

	private final static String SECURITY_TOKEN = "?token=4bf578db00dbd24146a33a72f2ab8272";

	private final static String ALL_CONTACTS_ENPOINT = "/Contact";

	private final static String CONTACT_ADRESS_ENDPOINT = "/ContactAddress";

	private final static String SLASH = "/";

	private final WebClient webClient;

	public SevdeskService(WebClient.Builder webClientBuilder) {

		this.webClient = webClientBuilder.baseUrl(BASE_URL).build();

	}

	/**
	 * Get all Contact (kunden)
	 * https://my.sevdesk.de/api/v1/Contact?token=4bf578db00dbd24146a33a72f2ab8272
	 * 
	 * @return JsonNode all Contact
	 */
	public Mono<JsonNode> getAllContacts() {

		String uri = BASE_URL.concat(ALL_CONTACTS_ENPOINT).concat(SECURITY_TOKEN);
		log.info("getAllContacts() -> uri: " + uri);

		return jsonNode(uri);

	}

	/**
	 * Get all ContactAddress
	 * https://my.sevdesk.de/api/v1/ContactAddress?token=4bf578db00dbd24146a33a72f2ab8272
	 * 
	 * @return JsonNode all ContactAddress
	 */
	public Mono<JsonNode> getAllContactAddress() {

		String uri = BASE_URL.concat(CONTACT_ADRESS_ENDPOINT).concat(SECURITY_TOKEN);
		log.info("getAllContactAddress() -> uri: " + uri);

		return jsonNode(uri);
	}

	/**
	 * Get a ContactAdress by her id (! not the Contact id), Example:
	 * https://my.sevdesk.de/api/v1/ContactAddress/43067959/
	 * 
	 * @param id id of ContactAddress
	 * @return JsonNode a ContactAddress
	 */
	public Mono<JsonNode> getContactAddressbyId(String id) {
		String uri = BASE_URL.concat(CONTACT_ADRESS_ENDPOINT).concat(SLASH).concat(id).concat(SLASH)
				.concat(SECURITY_TOKEN);
		log.info("getContactAddressbyId() -> uri: " + uri);

		return jsonNode(uri);
	}

	// TODO error handling with Mono.error(ex) in front
	private Mono<JsonNode> jsonNode(String uri) {
		return this.webClient.get().uri(uri).accept(MediaType.APPLICATION_JSON).retrieve().bodyToMono(JsonNode.class)
				.onErrorResume(WebClientResponseException.class,
						ex -> ex.getRawStatusCode() == 400 ? Mono.empty() : Mono.error(ex));

	}

	private Mono<? extends JsonNode> extracted(WebClientResponseException ex) {
		return ex.getRawStatusCode() == 400 ? Mono.empty() : Mono.error(ex);
	}
}
