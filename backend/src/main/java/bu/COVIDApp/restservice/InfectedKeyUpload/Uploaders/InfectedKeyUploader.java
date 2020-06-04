package bu.COVIDApp.restservice.InfectedKeyUpload.Uploaders;

import bu.COVIDApp.restservice.InfectedKeyUpload.InfectedKeys;

public abstract class InfectedKeyUploader {
    InfectedKeys myKeys;

    /**
     * @param myKeys an InfectedKeys object that contains the keys and authorization info for the key upload
     */
    public InfectedKeyUploader(InfectedKeys myKeys){
        this.myKeys = myKeys;
    }

    /**
     * check if the authorization key in myKeys is valid
     * @return true if authorization was successful, false otherwise
     */
    protected boolean authorize(){
        return true;
    }

    /**
     * Uploads the keys to the registry in the form required for that specific dbSchema
     */
    public abstract void uploadKeys();
}
