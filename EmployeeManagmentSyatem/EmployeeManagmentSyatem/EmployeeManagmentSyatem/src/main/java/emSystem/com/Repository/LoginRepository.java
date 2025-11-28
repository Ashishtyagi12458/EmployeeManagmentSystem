package emSystem.com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import emSystem.com.Entity.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>{
	
	Login findByEmail(String email); 
	
	
	

}
