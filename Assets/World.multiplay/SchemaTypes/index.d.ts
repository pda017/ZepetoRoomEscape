declare module "ZEPETO.Multiplay.Schema" {

	import { Schema, MapSchema, ArraySchema } from "@colyseus/schema"; 


	interface State extends Schema {
		PlayerInfoList: MapSchema<SPlayerInfo>;
		PlayerInfoListDirty: number;
	}
	class SPlayerInfo extends Schema {
		SessionId: string;
		UserId: string;
	}
}