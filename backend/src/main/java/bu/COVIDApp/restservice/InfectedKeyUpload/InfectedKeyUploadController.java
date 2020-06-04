package bu.COVIDApp.restservice.InfectedKeyUpload;

import org.springframework.web.bind.annotation.*;


public class InfectedKeyUploadController {
    /**
     * Allows a user with credentials issued from /UploadCredentials to add keys to be marked as infected to the db
     * @param myObj An object containing the keys to be marked infected and authentication details
     * @return true if keygen was successful else return false
     */
    @PostMapping("/InfectedKey")
    public boolean PostInfectedKey(@RequestBody InfectedKeys myObj) {
        return true;
    }
}
