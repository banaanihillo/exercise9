import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import {Button, Divider, Header, Container} from "semantic-ui-react";
import {apiBaseUrl as url} from "./constants";
import {useStateValue} from "./state";
import {Patient} from "./types";
import PatientListPage from "./PatientListPage";
import IndividualPatient from "./PatientListPage/IndividualPatient"

const App: React.FC = () => {
    
    const [, dispatch] = useStateValue();
    React.useEffect(() => {
        axios.get<void>(`${url}/ping`);

        const fetchPatientList = async () => {
            try {
                const { data: patientListFromApi } = await axios.get<Patient[]>(
                    `${url}/patients`
                );
                dispatch({ type: "SET_PATIENT_LIST", payload: patientListFromApi });
            } catch (error) {
                console.error(error);
            }
        };
        fetchPatientList();
    }, [dispatch]);

    return (
        <div className="App">
            <BrowserRouter>
                <Container>
                    <Header as = "h1"> Patientor </Header>
                        <Button as = {Link} to = "/" primary>
                            Home
                        </Button>
                        <Divider hidden />
                        <Switch>
                            <Route
                                path = "/patients/:id"
                                component = {IndividualPatient}>
                            </Route>
                            <Route path = "/" render = {() => <PatientListPage />} />
                        </Switch>
                </Container>
            </BrowserRouter>
        </div>
    );
};

export default App;
