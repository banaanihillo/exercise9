import React from "react";
import {Formik, Field} from "formik"
import {Form, Grid, Button} from "semantic-ui-react";
import {
    DiagnosisSelection,
    NumberField,
    TextField
} from "../AddPatientModal/FormField";
import {useStateValue} from "../state";
import {HealthCheckThing} from "../types";

interface HealthThingProps {
    handleEntrySubmission: (values: HealthCheckThing) => void
    onCancel: () => void
}

const AddEntryForm: React.FunctionComponent<HealthThingProps> = (props) => {
    const {handleEntrySubmission, onCancel} = props
    const [state] = useStateValue()
    //type should probably be a select field as well, right
    return (
        <Formik
            initialValues = {{
                type: "HealthCheck",
                date: "",
                specialist: "",
                description: "",
                healthCheckRating: 0
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
                    errors.name = typeRequirement
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
                        <Field
                            label = "Health check rating"
                            //placeholder = "Health check rating (0-4)"
                            name = "healthCheckRating"
                            component = {NumberField}
                            min = {0}
                            max = {3}
                        />
                        <DiagnosisSelection
                            setFieldValue = {setFieldValue}
                            setFieldTouched = {setFieldTouched}
                            diagnoses = {Object.values(state.diagnoses)}
                        />

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
