

@SpringBootApplication
public class ConfigClientApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigClientApplication.class, args);
    }
}
@RefreshScope
@RestController
class MessageRestController {
    @Value("${message:Hello default}")
    private String message;
    @RequestMapping("/message")
    String getMessage() {
        return this.message;
    }
}

The default configuration only allows the values to be read on the client’s startup and not again. So, using @RefreshScope we force the bean to refresh its configuration, which means it will pull updated values from the Config Server, and then trigger a refresh event.