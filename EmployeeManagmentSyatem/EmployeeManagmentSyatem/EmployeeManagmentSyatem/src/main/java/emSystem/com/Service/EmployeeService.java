package emSystem.com.Service;

import java.util.List;

import emSystem.com.Dto.EmployeeDto;
import emSystem.com.Dto.LoginRequest;
import emSystem.com.Entity.Login;

public interface EmployeeService {
	
	EmployeeDto createEmployee(EmployeeDto employeedto);
	
	//get employee
	
	     EmployeeDto getEmployee( int employeeId);
	     
	     //get all employee
	     List<EmployeeDto> getAllEmployee();
	     
	     EmployeeDto updateEmployee(int employeeId, EmployeeDto updateEmployee);
	     
	     void deleteEmployee(int employeeId);
	     
	     Login loginService(LoginRequest request);
}
