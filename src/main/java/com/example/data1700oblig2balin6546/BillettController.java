package com.example.data1700oblig2balin6546;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController

public class BillettController {

    public final List<Billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett) {
        alleBilletter.add(innBillett);
        System.out.println(alleBilletter); // only for debug
    }

    @GetMapping("/hentAlle")
    public List<Billett> hentAlle() {
        return alleBilletter;
    }
}
