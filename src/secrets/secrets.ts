export class Secrets {
	private accessId:string = '***REMOVED***';
	private APIkey:string = '***REMOVED***';

	public getAPIkey():string {
		return this.APIkey;
	}

	public getAccessId():string {
		return this.accessId;
	}
}