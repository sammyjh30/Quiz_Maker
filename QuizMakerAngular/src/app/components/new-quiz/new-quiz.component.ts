import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.css']
})
export class NewQuizComponent implements OnInit {
  @Input() formContent: any;

  @Output() readonly formSubmit: EventEmitter<any> = new EventEmitter<any>();

  //track question and round number
  questionNumber: number;
  roundNumber: number;
  numberOfRounds: number;

  activeStepIndex: number;
  currentFormContent: Array<any>;
  formData: any;
  formFields: Array<Array<string>>;
  masterFormFields: Array<string>;
  stepItems: Array<any>;
  masterForm: Array<FormGroup>;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.roundNumber = 1;
    this.questionNumber = 1;

    this.activeStepIndex = 0;
    this.masterForm = [];
    this.currentFormContent = [];
    this.formFields = [];
    this.stepItems = this.formContent;

    this.stepItems.forEach((data, i) => {

      this.currentFormContent.push(this.stepItems[i]['data']);
      this.formFields.push(Object.keys(this.currentFormContent[i]));
      this.masterForm.push(this.buildForm(this.currentFormContent[i]))
    });
  }

   buildForm(currentFormContent: any): FormGroup {
      const formDetails = Object.keys(currentFormContent).reduce(
        (obj, key) => {
          obj[key] = ['', this.getValidators(currentFormContent[key])];

          return obj;
        },
        {}
      );

      return this.formBuilder.group(formDetails);
    }

    getValidators(formField: any): Validators {
      if (formField.validations) {
        const fieldValidators = Object.keys(formField.validations).map(validator => {
          if (validator === 'required') {
            return Validators[validator];
          } else {
            return Validators[validator](formField.validations[validator]);
          }
        });

        return fieldValidators;
      }

    }

    getValidationMessage(formIndex: number, formFieldName: string): string {
      const formErrors = this.masterForm[formIndex].get(formFieldName).errors;
      const errorMessages = this.currentFormContent[formIndex][formFieldName]
        .errors;
      const validationError = errorMessages[Object.keys(formErrors)[0]];
  
      return validationError;
    }

    goToStep(step: string): void {
      this.activeStepIndex =
        step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
      
      this.setFormPreview();
    }

    setFormPreview(): void {
      this.formData = this.masterForm.reduce(
        (masterForm, currentForm) => ({ ...masterForm, ...currentForm.value }),
        {}
      );
  
      this.masterFormFields = Object.keys(this.formData);
    }
  
    onFormSubmit(): void {
      this.formSubmit.emit(this.formData);
    }
  
    trackByFn(index: number): number {
      return index;
    }

    //uncheck other multiple options
    enableControl(control: AbstractControl, enabled: Boolean) {
      if (enabled) {
        control.enable();
      } else {
        control.disable();
      }
    }

    save(action) {
      if (action === 'nextQuestion') {
        //add question to list 
        console.warn('adding question to list...')
      }

      if (action === 'completeRound') {
        //complete round
        console.warn('...round complete')
      }
    }

    incrementQuestionNumber() {
      ++this.questionNumber;
    }

    incrementRoundNumber() {
      ++this.roundNumber;
    }

    resetQuestionNumber() {
      this.questionNumber = 1;
    }

    resetRoundNumber() {
      this.roundNumber = 1;
    }
    
    asnswerChecked(answer: string) {
      // if (aswer)
    }

    isMultipleChoiceSelected() {
      return this.masterForm[0].get('multipleChoice').value;
    }

    isTrueFalseSelected() {
      return this.masterForm[0].get('trueFalse').value;
    }

    onInputChange() {
      if (this.isNumberOfRounds()) {
        this.updateNumberOfRounds();
      }
    }

    isNumberOfRounds() {
      return this.masterForm[0].get('numberOfRounds').value;
    }

    updateNumberOfRounds() {
      this.numberOfRounds = this.masterForm[0].get('numberOfRounds').value;
    }

}
