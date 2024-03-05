package com.example.data1700oblig2balin6546;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test{
    @GetMapping("/")
    public String hei(String navn){
        return "Hei verden "+navn;
    }
}
