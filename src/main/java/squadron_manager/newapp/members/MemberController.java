package squadron_manager.newapp.members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping(MemberController.URI)

public class MemberController {
    public static final String URI = "/api/members";

    @Autowired
    private MemberRepository memberRepository;

    @CrossOrigin
    @GetMapping
    public @ResponseBody
    Iterable<Member> getMembers() {
        return memberRepository.findAll();
    }

    @CrossOrigin
    @Transactional
    @PostMapping(path = "/save")
    public Iterable<Member> addMember(@Valid @RequestBody Member newMember) {
        Date date = new Date();
        Member newMemberData = new Member(
                newMember.getName(),
                newMember.getGrade(),
                newMember.getAssignedPas(),
                newMember.getDafsc(),
                newMember.getOfficeSymbol(),
                newMember.getDutyTitle(),
                newMember.getDutyStartDate(),
                newMember.getDutyPhone(),
                newMember.getSupvName(),
                newMember.getSupvBeginDate(),
                newMember.getDateArrivedStation(),
                newMember.getRnltd(),
                newMember.getDor(),
                date
        );

        memberRepository.save(newMemberData);
        return memberRepository.findAll();
    }

    @CrossOrigin
    @Transactional
    @PostMapping(path = "/update")
    public Iterable<Member> updateMember(@Valid @RequestBody Member updatedMember, String[] fields) {

        List<Member> members = memberRepository.findByName(updatedMember.getName());

        for (String field : fields) {
            switch (field) {
                case "pas":
                    members.get(0).setAssignedPas(updatedMember.getAssignedPas());
                    break;
                case "dafsc":
                    members.get(0).setDafsc(updatedMember.getDafsc());
                    break;
                case "office":
                    members.get(0).setOfficeSymbol(updatedMember.getOfficeSymbol());
                    break;
                case "title":
                    members.get(0).setDutyTitle(updatedMember.getDutyTitle());
                    break;
                case "startDate":
                    members.get(0).setDutyStartDate(updatedMember.getDutyStartDate());
                    break;
                case "phone":
                    members.get(0).setDutyPhone(updatedMember.getDutyPhone());
                    break;
                case "supervisor":
                    members.get(0).setSupvName(updatedMember.getSupvName());
                    break;
                case "supvBeginDate":
                    members.get(0).setSupvBeginDate(updatedMember.getSupvBeginDate());
                    break;
                case "dateArrived":
                    members.get(0).setDateArrivedStation(updatedMember.getDateArrivedStation());
                    break;
                case "rnltd":
                    members.get(0).setRnltd(updatedMember.getRnltd());
                    break;
                case "dor":
                    members.get(0).setDor(updatedMember.getDor());
                    break;
                default:
                    break;
            }
        }

        memberRepository.save(members.get(0));
        return memberRepository.findAll();
    }

    @CrossOrigin
    @Transactional
    @PostMapping(path = "/delete")
    public Iterable<Member> deleteMember(@Valid @RequestBody Member member) {
        List<Member> members = memberRepository.findByNameAndGrade(member.getName(), member.getGrade());

        if (members.size() > 0) {
            memberRepository.deleteById(members.get(0).getId());
        }

        return memberRepository.findAll();
    }
}
