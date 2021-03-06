package squadron_manager.newapp.members;

import lombok.*;

import javax.persistence.Column;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MemberJSON {
    private Long id;
    private String name;
    private String grade;
    private String assignedPas;
    private String dafsc;
    private String officeSymbol;
    private String dutyTitle;
    private Date dutyStartDate;
    private String dutyPhone;
    private String supvName;
    private Date supvBeginDate;
    private Date dateArrivedStation;
    private Date rnltd;
    private Date dor;
    private Date lastUpdated;
}
