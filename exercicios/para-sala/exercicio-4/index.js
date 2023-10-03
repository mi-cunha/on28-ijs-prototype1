const { Employee } = require('./resolucao');

const employee1 = Employee('Luara', 'Kerlen', 10000);
employee1.addBenefits('VR');
employee1.addBenefits('VA');
employee1.addBenefits('Zenklub');
employee1.listBenefits();
employee1.removeBenefits('VA');
employee1.listBenefits();
employee1.raiseSalary(0.05);

const employee2 = Employee('Maria', 'Santos', 10000);
employee2.addBenefits('VR');
employee2.addBenefits('VA');
employee2.addBenefits('Zenklub');
employee2.listBenefits();
employee2.removeBenefits('VA');
employee2.listBenefits();
employee2.raiseSalary(0.05);
