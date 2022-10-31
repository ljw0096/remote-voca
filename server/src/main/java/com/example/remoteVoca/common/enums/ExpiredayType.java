package com.example.remoteVoca.common.enums;

public enum ExpiredayType {
    ONEDAY("1일"),
    TWODAY("2일"),
    THREEDAY("3일");

    private String status;
    ExpiredayType(String status){this.status = status;}

    public String getStatus() {
        return status;
    }
}
