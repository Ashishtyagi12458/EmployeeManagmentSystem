package emSystem.com.Service.Impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import emSystem.com.Dto.EmployeeDto;
import emSystem.com.Dto.LoginRequest;
import emSystem.com.Entity.Employee;
import emSystem.com.Entity.Login;
import emSystem.com.Exception.ResourceNotFoundException;
import emSystem.com.Mapper.EmployeeMapper;
import emSystem.com.Repository.EmployeeRepository;
import emSystem.com.Repository.LoginRepository;
import emSystem.com.Service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeRepository employeeresitory;
	@Autowired
	private LoginRepository loginrepository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeedto) {

		Employee employee = EmployeeMapper.mapEmployee(employeedto);
		System.out.println("Employee in Service "+employee);
		Employee saveEmployee = employeeresitory.save(employee);
		return EmployeeMapper.mapEmployeeDto(saveEmployee);
	}

//get single user
	@Override
	public EmployeeDto getEmployee(int employeeId) {

		Employee employee = employeeresitory.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("employee connot exits this ide" + employeeId));
		return EmployeeMapper.mapEmployeeDto(employee);
	}

//get all user
	@Override
	public List<EmployeeDto> getAllEmployee() {

		List<Employee> employees = employeeresitory.findAll();

		return employees.stream().map(emp -> EmployeeMapper.mapEmployeeDto(emp)).collect(Collectors.toList());

	}

	@Override
	public EmployeeDto updateEmployee(int employeeId, EmployeeDto updateEmployee) {

		Employee employee = employeeresitory.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("employee not exits this ide" + employeeId));

		employee.setFirstname(updateEmployee.getFirstname());
		employee.setLastname(updateEmployee.getLastname());
		employee.setEmail(updateEmployee.getEmail());

		Employee save = employeeresitory.save(employee);

		return EmployeeMapper.mapEmployeeDto(save);
	}

	@Override
	public void deleteEmployee(int employeeId) {

		Employee employee = employeeresitory.findById(employeeId)
				.orElseThrow(() -> new ResourceNotFoundException("employee not exits this ide" + employeeId));
		employeeresitory.delete(employee);

	}

	@Override
	public Login loginService(LoginRequest request) {
		Login userData = loginrepository.findByEmail(request.getEmail());
		if(userData !=null) {
			return userData;
		}
		throw new RuntimeException("No Data Found");
		
	}
	
	
	
}
