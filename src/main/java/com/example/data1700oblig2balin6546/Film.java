package com.example.data1700oblig2balin6546;

public class Film {

    private String tittel;
    private String sjanger;
    private int prodAar;

    public Film(String tittel, String sjanger, int prodAar){
        this.tittel = tittel;
        this.sjanger = sjanger;
        this.prodAar = prodAar;
    }

    public Film(){
    }

    public void setTittel(String tittel){
        this.tittel = tittel;
    }

    public void setSjanger(String sjanger){
        this.sjanger = sjanger;
    }

    public void setProdAar(int prodAar){
        this.prodAar = prodAar;
    }

    public String getTittel(){
        return tittel;
    }

    public String getSjanger(){
        return sjanger;
    }

    public int getProdAar(){
        return prodAar;
    }
}
