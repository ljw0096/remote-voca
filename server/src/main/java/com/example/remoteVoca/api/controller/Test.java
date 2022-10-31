package com.example.remoteVoca.api.controller;

import com.example.remoteVoca.api.request.ProblemPostReq;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class Test {

    @GetMapping("/test")
    public ResponseEntity<?> getProblems(@RequestParam List<String> test){

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/test")
    public ResponseEntity<?> loadProblems(@RequestBody ProblemPostReq problemPostReq){

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
