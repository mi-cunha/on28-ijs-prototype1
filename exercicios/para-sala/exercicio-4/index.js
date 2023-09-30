const { Employee } = require("./resolucao");

const employee1 = Employee("Noemi", "Cunha", 30000);

console.log(employee1);
employee1.raiseSalary(50);
employee1.addBenefits("VR");
employee1.addBenefits("VA");
employee1.addBenefits("Zenklub");
employee1.listBenefits();
employee1.removeBenefits("VA");
employee1.listBenefits();
