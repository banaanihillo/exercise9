import React from "react";
import {Formik, Field} from "formik"
import {Form, Grid, Button} from "semantic-ui-react";
import {
    DiagnosisSelection,
    NumberField,
    TextField
} from "../AddPatientModal/FormField";
import {useStateValue} from "../state";
import {EntryProps, TypeSelectionProps, EntryOption} from "../types";

const validateHealthCheck = (value: any) => {
    let healthCheckError;
    if (value !== 0 && !value) {
        healthCheckError = "Health check rating is required."
    }
    return healthCheckError;
}

const validateDischarge = (value: any) => {
    let dischargeError;
    if (!value) {
        dischargeError = "Discharge date and criteria are required."
    }
    return dischargeError;
}

const validateEmployerName = (value: any) => {
    let employerNameError;
    if (!value) {
        employerNameError = "Employer name is required."
    }
    return employerNameError;
}

const entrySpecificFields = (type: EntryOption["value"]) => {
    switch (type) {
        case "HealthCheck":
            return <Field
                label = "Health check rating"
                placeholder = "Health check rating (0-3)"
                name = "healthCheckRating"
                component = {NumberField}
                min = {0}
                max = {3}
                validate = {validateHealthCheck}
            />
        case "Hospital":
            return <span>
                <Field
                    label = "Discharge date"
                    placeholder = "Discharge date (YYYY-MM-DD)"
                    name = "dischargeDate"
                    component = {TextField}
                    validate = {validateDischarge}
                />
                <Field
                    label = "Discharge criteria"
                    placeholder = "Discharge criteria"
                    name = "dischargeCriteria"
                    component = {TextField}
                    validate = {validateDischarge}
                />
            </span>
        case "OccupationalHealthcare":
            return <span>
                <Field
                    label = "Employer name"
                    placeholder = "Employer name"
                    name = "employerName"
                    component = {TextField}
                    validate = {validateEmployerName}
                />
                <Field
                    label = "Start of sick leave"
                    placeholder = "Start of sick leave (YYYY-MM-DD)"
                    name = "sickLeaveStartDate"
                    component = {TextField}
                />
                <Field
                    label = "End of sick leave"
                    placeholder = "End of sick leave (YYYY-MM-DD)"
                    name = "sickLeaveEndDate"
                    component = {TextField}
                />
            </span>
        default:
            throw new Error("what happened")
    }
}

const entryTypeOptions: EntryOption[] = [
    {
        value: "HealthCheck",
        label: "HealthCheck"
    },
    {
        value: "Hospital",
        label: "Hospital"
    },
    {
        value: "OccupationalHealthcare",
        label: "OccupationalHealthcare"
    }
]

const NotReusableSelectField: React.FC<TypeSelectionProps> = ({
    name,
    label,
    options
  }: TypeSelectionProps) => (
    <Form.Field>
      <label>{label}</label>
      <Field as="select" name={name} className="ui dropdown">
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </Field>
    </Form.Field>
  );

const AddEntryForm: React.FunctionComponent<EntryProps> = (props) => {
    const {handleEntrySubmission, onCancel} = props
    const [state] = useStateValue()

    return (
        <Formik
            initialValues = {{
                type: "HealthCheck",
                date: "",
                specialist: "",
                description: ""
            }}
            onSubmit = {handleEntrySubmission}
            validate = {values => {
                const requirementError = "This is a required field."
                const typeRequirement = `
                    Type should be one of the following:
                    HealthCheck, Hospital, or OccupationalHealthcare.
                `
                const errors: {
                    [field: string]: string
                } = {};
                if (!values.type) {
                    errors.type = typeRequirement
                }
                if (!values.date) {
                    errors.date = requirementError
                }
                if (!values.specialist) {
                    errors.specialist = requirementError
                }
                if (!values.description) {
                    errors.description = requirementError
                }
                return errors
            }}
        >
            {({setFieldValue, setFieldTouched, values, isValid, dirty}) => {
                return (
                    <Form>
                        <NotReusableSelectField
                            label = "Type of entry"
                            name = "type"
                            options = {entryTypeOptions}
                        />
                        <Field
                            label = "Date"
                            placeholder = "Date (YYYY-MM-DD)"
                            name = "date"
                            component = {TextField}
                        />
                        <Field
                            label = "Name of specialist"
                            placeholder = "Name of specialist"
                            name = "specialist"
                            component = {TextField}
                        />
                        <Field
                            label = "Description"
                            placeholder = "Description"
                            name = "description"
                            component = {TextField}
                        />

                        <DiagnosisSelection
                            setFieldValue = {setFieldValue}
                            setFieldTouched = {setFieldTouched}
                            diagnoses = {Object.values(state.diagnoses)}
                        />

                        {entrySpecificFields(values.type)}

                        <Grid>
                            <Grid.Column floated = "left" width = {5}>
                                <Button type = "button" onClick = {onCancel}>
                                    Cancel
                                </Button>
                            </Grid.Column>
                            <Grid.Column floated = "right" width = {5}>
                                <Button
                                    onClick = {() => handleEntrySubmission(values)}
                                    disabled = {!dirty || !isValid}
                                >
                                    Submit
                                </Button>
                            </Grid.Column>
                        </Grid>
                    </Form>
                )
            }}
        </Formik>
    )
    
}

export default AddEntryForm;
