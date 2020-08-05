package squadron_manager.newapp.members;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table(name = "members")
@DynamicUpdate
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;

    @Column(name = "name")
    private String name;

    private String grade;

    @Column(name = "assigned_pas")
    private String assignedPas;

    private String dafsc;

    @Column(name = "office_symbol")
    private String officeSymbol;

    @Column(name = "duty_title")
    private String dutyTitle;

    @Column(name = "duty_start_date")
    private Date dutyStartDate;

    @Column(name = "duty_phone")
    private String dutyPhone;

    @Column(name = "supv_name")
    private String supvName;

    @Column(name = "supv_begin_date")
    private Date supvBeginDate;

    @Column(name = "date_arrived_station")
    private Date dateArrivedStation;

    private Date rnltd;
    private Date dor;

    @Column(name = "last_updated")
    private Date lastUpdated;

    public Member(Long id, String name, String grade, String assignedPas, String dafsc, String officeSymbol,
                  String dutyTitle, Date dutyStartDate, String dutyPhone, String supvName,
                  Date supvBeginDate, Date dateArrivedStation, Date rnltd, Date dor, Date lastUpdated) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.assignedPas = assignedPas;
        this.dafsc = dafsc;
        this.officeSymbol = officeSymbol;
        this.dutyTitle = dutyTitle;
        this.dutyStartDate = dutyStartDate;
        this.dutyPhone = dutyPhone;
        this.supvName = supvName;
        this.supvBeginDate = supvBeginDate;
        this.dateArrivedStation = dateArrivedStation;
        this.rnltd = rnltd;
        this.dor = dor;
        this.lastUpdated = lastUpdated;
    }

    public Member(String name, String grade, String assignedPas, String dafsc, String officeSymbol,
                  String dutyTitle, Date dutyStartDate, String dutyPhone, String supvName,
                  Date supvBeginDate, Date dateArrivedStation, Date rnltd, Date dor, Date lastUpdated) {
        this.name = name;
        this.grade = grade;
        this.assignedPas = assignedPas;
        this.dafsc = dafsc;
        this.officeSymbol = officeSymbol;
        this.dutyTitle = dutyTitle;
        this.dutyStartDate = dutyStartDate;
        this.dutyPhone = dutyPhone;
        this.supvName = supvName;
        this.supvBeginDate = supvBeginDate;
        this.dateArrivedStation = dateArrivedStation;
        this.rnltd = rnltd;
        this.dor = dor;
        this.lastUpdated = lastUpdated;
    }
}
