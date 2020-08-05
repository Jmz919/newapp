package squadron_manager.newapp.members;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.Date;

@RestController
@RequestMapping(MemberController.URI)

public class MemberController {
    public static final String URI = "/api/members";

    @Autowired
    private MemberRepository memberRepository;

    @CrossOrigin
    @GetMapping
    public @ResponseBody
    Iterable<Member> getMembers() { return memberRepository.findAll(); }

    @CrossOrigin
    @Transactional
    @PostMapping(path = "/save")
    public Iterable<Member> addMember(@Valid @RequestBody Member newMember) {
        System.out.println(newMember);

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
}
