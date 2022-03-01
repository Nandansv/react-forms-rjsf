import { ReactElement, FC } from "react";
import Form from "@rjsf/material-ui";

const DynamicFormRJSF: FC<any> = (props): ReactElement => {

    const { config } = props;
    
    const uiSchema = {
        longDescription : {"ui:widget": "textarea",
        "ui:options": {
          rows: 4
        }}
    }
    return (
        <div style={{ border: '1px solid black', margin: 'auto', display: 'table' }}>
            <Form schema={config}
            uiSchema={uiSchema}
            
            />
        </div>
    )
};
export default DynamicFormRJSF;