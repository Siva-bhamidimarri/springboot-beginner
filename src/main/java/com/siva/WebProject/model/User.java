package com.siva.WebProject.model;

public class User {
    private String name;
    private String image;
    private String gender;
    private Integer id;
    //default constructor
    public User(){
        
    }
    //parameterized constructor
    public User(String name, String image, String gender, Integer id){
        this.name = name;
        this.image = image;
        this.gender = gender;
        this.id = id;
    }
    //getters and setters
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = image;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

}