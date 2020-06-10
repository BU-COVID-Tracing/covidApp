package bu.COVIDApp.restservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UploadCredentialsController {
    /**
     * Create a new authentication key to be used by public health officials for uploading
     * @param authentication Developer/Admin authentication for generating a new key
     * @return the newly generated key
     */
    @GetMapping("/UploadCredentials")
    public String GetCredentials(@RequestParam(value = "authentication", defaultValue = "") String authentication) {
        return "credentials";
    }

    /**
     * Delete a previously issued authentication key
     * @param revokeCredentials the credentials you would like to revoke
     */
    @DeleteMapping("/UploadCredentials")
    void DeleteCredentials(@PathVariable String revokeCredentials) {

    }
}
