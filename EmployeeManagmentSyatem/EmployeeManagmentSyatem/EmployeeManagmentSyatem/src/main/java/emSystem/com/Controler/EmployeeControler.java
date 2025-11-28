package emSystem.com.Controler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.support.Repositories;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import emSystem.com.Dto.EmployeeDto;
import emSystem.com.Dto.LoginRequest;
import emSystem.com.Entity.Login;
import emSystem.com.Repository.EmployeeRepository;
import emSystem.com.Repository.LoginRepository;
import emSystem.com.Service.EmployeeService;
import emSystem.com.configuation.JwtFilter;
@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class EmployeeControler {
	@Autowired
	private EmployeeService employeeservice;
	@Autowired
	private JwtFilter jwtFilter;
	//add employee 
	@PostMapping("/adding")
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeedto){
		System.out.println("controler data "+employeedto);
		
		EmployeeDto savedemployee = employeeservice.createEmployee(employeedto);
		
		return new ResponseEntity<>(savedemployee,HttpStatus.CREATED);
		 
	}
	
	//get Employee by employee id
	@GetMapping("/getting/{id}")
	public ResponseEntity<EmployeeDto> getEmployee(@PathVariable("id") int employeeId){
		EmployeeDto employee = employeeservice.getEmployee(employeeId);
		return ResponseEntity.ok(employee);		
	}
	
	//get all employee
	@GetMapping("allemployee")
	public ResponseEntity<List<EmployeeDto>> getAllEmployee(){
		
		List<EmployeeDto> allEmployee = employeeservice.getAllEmployee();
		
		return ResponseEntity.ok(allEmployee);	
	}
	
	//Update Employee
	@PutMapping("update/{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") int employeeId,
		@RequestBody	EmployeeDto updateEmployee){
		
		EmployeeDto updEmployee = employeeservice.updateEmployee(employeeId, updateEmployee);
		
		return ResponseEntity.ok(updEmployee);
	}
	
	//Detlete Emplyee
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteEmplyee(@PathVariable("id") int emplyeeId){
		employeeservice.deleteEmployee(emplyeeId);
		return ResponseEntity.status(HttpStatus.OK).body("you delete your employee");
	}
	
	  @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
		  Login loginService = employeeservice.loginService(request);
		  
		  if(loginService!=null) {
			  String token = jwtFilter.generateToken(loginService.getEmail());
			  Map<String,Object> response = new HashMap<>();
			  response.put("token",token);
			  response.put("userDetails",loginService);
			  return  ResponseEntity.status(HttpStatus.OK).body(response);
		  }
		  
		  return  ResponseEntity.status(HttpStatus.NOT_FOUND).body("Please Enter Valid Email and Password");
		  
		  
	  }

}
