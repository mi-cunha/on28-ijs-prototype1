const { Employee } = require('./resolucao');

const employee1 = Employee('Luara', 'Kerlen', 10000);
employee1.addBenefits('VR');
employee1.addBenefits('VA');
employee1.addBenefits('Zenklub');
employee1.listBenefits();

employee1.removeBenefits('VA');
employee1.listBenefits();

employee1.removeBenefits('Gympass');
employee1.listBenefits();