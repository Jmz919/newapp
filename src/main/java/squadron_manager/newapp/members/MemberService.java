package squadron_manager.newapp.members;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class MemberService {
    private MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public void addMember(Member newMember) {
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
    }


    public void updateMember(Member updatedMember) {
        List<Member> members = memberRepository.findByName(updatedMember.getName());

        if (updatedMember.getGrade() == null) {
            updatedMember.setGrade("");
        }
        if (updatedMember.getAssignedPas() == null) {
            updatedMember.setAssignedPas("");
        }
        if (updatedMember.getDafsc() == null) {
            updatedMember.setDafsc("");
        }
        if (updatedMember.getOfficeSymbol() == null) {
            updatedMember.setOfficeSymbol("");
        }
        if (updatedMember.getDutyTitle() == null) {
            updatedMember.setDutyTitle("");
        }
        if (updatedMember.getDutyStartDate() == null) {
            updatedMember.setDutyStartDate(new Date());
        }
        if (updatedMember.getDutyPhone() == null) {
            updatedMember.setDutyPhone("");
        }
        if (updatedMember.getSupvName() == null) {
            updatedMember.setSupvName("");
        }
        if (updatedMember.getSupvBeginDate() == null) {
            updatedMember.setSupvBeginDate(new Date());
        }
        if (updatedMember.getDateArrivedStation() == null) {
            updatedMember.setDateArrivedStation(new Date());
        }
        if (updatedMember.getRnltd() == null) {
            updatedMember.setRnltd(new Date());
        }
        if (updatedMember.getDor() == null) {
            updatedMember.setDor(new Date());
        }

        if (members.size() > 0) {
            if (!members.get(0).getGrade().equals(updatedMember.getGrade()) && !updatedMember.getGrade().equals("")) {
                members.get(0).setGrade(updatedMember.getGrade());
            }
            if (!members.get(0).getAssignedPas().equals(updatedMember.getAssignedPas()) && !updatedMember.getAssignedPas().equals("")) {
                members.get(0).setAssignedPas(updatedMember.getAssignedPas());
            }
            if (!members.get(0).getDafsc().equals(updatedMember.getDafsc()) && !updatedMember.getDafsc().equals("")) {
                members.get(0).setDafsc(updatedMember.getDafsc());
            }
            if (!members.get(0).getOfficeSymbol().equals(updatedMember.getOfficeSymbol()) && !updatedMember.getOfficeSymbol().equals("")) {
                members.get(0).setOfficeSymbol(updatedMember.getOfficeSymbol());
            }
            if (!members.get(0).getDutyTitle().equals(updatedMember.getDutyTitle()) && !updatedMember.getDutyTitle().equals("")) {
                members.get(0).setDutyTitle(updatedMember.getDutyTitle());
            }
            if (!members.get(0).getDutyStartDate().equals(updatedMember.getDutyStartDate()) && !updatedMember.getDutyStartDate().equals(new Date())) {
                members.get(0).setDutyStartDate(updatedMember.getDutyStartDate());
            }
            if (!members.get(0).getDutyPhone().equals(updatedMember.getDutyPhone()) && !updatedMember.getDutyPhone().equals("")) {
                members.get(0).setDutyPhone(updatedMember.getDutyPhone());
            }
            if (!members.get(0).getSupvName().equals(updatedMember.getSupvName()) && !updatedMember.getSupvName().equals("")) {
                members.get(0).setSupvName(updatedMember.getSupvName());
            }
            if (!members.get(0).getSupvBeginDate().equals(updatedMember.getDutyStartDate()) && !updatedMember.getSupvBeginDate().equals(new Date())) {
                members.get(0).setDutyStartDate(updatedMember.getSupvBeginDate());
            }
            if (!members.get(0).getDateArrivedStation().equals(updatedMember.getDateArrivedStation()) && !updatedMember.getDateArrivedStation().equals(new Date())) {
                members.get(0).setDateArrivedStation(updatedMember.getDateArrivedStation());
            }
            if (!members.get(0).getRnltd().equals(updatedMember.getRnltd()) && !updatedMember.getRnltd().equals(new Date())) {
                members.get(0).setRnltd(updatedMember.getRnltd());
            }
            if (!members.get(0).getDor().equals(updatedMember.getDor()) && !updatedMember.getDor().equals(new Date())) {
                members.get(0).setDor(updatedMember.getDor());
            }
            memberRepository.save(members.get(0));
        }
    }


    public void deleteMember(Member member) {
        List<Member> members = memberRepository.findByNameAndGrade(member.getName(), member.getGrade());
        if (members.size() > 0) {
            memberRepository.deleteById(members.get(0).getId());
        }
    }
}
