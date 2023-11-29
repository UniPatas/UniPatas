import { useState } from 'react';
import CadastroOngs from '@components/CadastroOngs';
import RedesSociais from '@components/RedesSociais';
import CadastroConcluido from '@components/CadastroConcluido';

const MultiStepForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
      
    });

    const nextStep = () => {
        setStep(step + 1);
      };
    
      const prevStep = () => {
        setStep(step - 1);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
     
        console.log('Form submitted:', formData);
      };
    
      return (
        <div>
          {step === 1 && (
            <CadastroOngs formData={formData} setFormData={setFormData} nextStep={nextStep} />
          )}
          {step === 2 && (
            <RedesSociais formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          )}
          {step === 3 && (
            <CadastroConcluido formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
          )}
        </div>
      );
    };
    
    export default MultiStepForm;
