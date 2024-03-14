package com.example.data1700oblig2balin6546;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;
import java.util.List;

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
