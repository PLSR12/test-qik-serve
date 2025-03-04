import { type ReactElement } from "react";
import { ButtonContainer } from "./styles";
import { ButtonProps } from "antd";

export function Button(props: ButtonProps): ReactElement {
	return <ButtonContainer {...props} />;
}
