package br.com.futebol.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/messages")
@CrossOrigin(origins = "*")
public class TesteController {

    @PostMapping("/send")
    public ResponseEntity<String> receiveMessage(@RequestBody Message message){
        String response = "Mensagem Recebida: "+message.getContent();
        return ResponseEntity.ok(response);
    }
}

class Message{
    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

}
