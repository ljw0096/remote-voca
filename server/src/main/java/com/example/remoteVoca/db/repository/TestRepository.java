package com.example.remoteVoca.db.repository;

import com.example.remoteVoca.db.entity.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test,Long> {
}
