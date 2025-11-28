package emSystem.com.Mapper;

import org.springframework.stereotype.Component;

import emSystem.com.Dto.EmployeeDto;
import emSystem.com.Entity.Employee;
@Component
public class EmployeeMapper {
	
	 public static EmployeeDto mapEmployeeDto(Employee employee ) {
		   
		   return new EmployeeDto(
				employee.getId(),
				employee.getFirstname(),
				employee.getLastname(),
				employee.getEmail()
				   
				   );
	}
      public static Employee mapEmployee(EmployeeDto employeedto) {
      	
      	return new Employee(
      			employeedto.getFirstname(),
      			employeedto.getLastname(),
      			employeedto.getEmail()
      			
      			);
      }

}
