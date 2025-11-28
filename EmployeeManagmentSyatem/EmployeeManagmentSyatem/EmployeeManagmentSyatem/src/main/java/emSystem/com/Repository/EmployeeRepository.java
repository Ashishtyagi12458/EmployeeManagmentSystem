package emSystem.com.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import emSystem.com.Entity.Employee;
import emSystem.com.Entity.Login;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
	
	

}
