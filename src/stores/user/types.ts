import { IUser } from "@/types/IUser";

export const nameState = "user";

export const initialState: IUser = {
	name: null,
	family_name: null,
	given_name: null,
	user_name: null,
	email: null,
	roles: [],
	avatar: undefined,
	homeAccountId: null,
	environment: null,
	tenantId: null,
	username: null,
	localAccountId: null,
	idTokenClaims: {
		aud: null,
		iss: null,
		iat: null,
		nbf: null,
		exp: null,
		name: null,
		nonce: null,
		oid: null,
		preferred_username: null,
		rh: null,
		roles: null,
		sub: null,
		tid: null,
		uti: null,
		ver: null,
	},
	idToken: "",
	_persist: {
		version: 0,
		rehydrated: false,
	},
};
