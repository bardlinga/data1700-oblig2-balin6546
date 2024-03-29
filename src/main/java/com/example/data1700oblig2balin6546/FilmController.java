package com.example.data1700oblig2balin6546;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController

public class FilmController {

    public List<Film> filmListe = new ArrayList<>();

    @GetMapping("/hentFilmListe")
    public List<Film> hentFilmListe() {
        return filmListe;
    }
}
