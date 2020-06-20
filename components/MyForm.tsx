import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { Form, Formik } from "formik";

interface Values {
    consumerMessage: string;
}

type Props = {
    onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ consumerMessage: "" }}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <TextField name="consumerMessage" value={values.consumerMessage} onChange={handleChange} />
                    <Button type="submit"> submit </Button>
                </Form>
            )}
        </Formik>
    );
};
