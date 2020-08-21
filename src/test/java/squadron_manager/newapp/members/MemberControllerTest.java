package squadron_manager.newapp.members;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import squadron_manager.newapp.BaseIntegrationTest;
import squadron_manager.newapp.members.Member;
import squadron_manager.newapp.members.MemberRepository;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import java.util.Date;

public class MemberControllerTest extends BaseIntegrationTest {
    @Autowired
    private MemberRepository memberRepository;
    private MemberController memberController;

    @Test
    public void getReturnsMembers() {
        Date date = new Date();
        Member newMember = new Member(
                "Hoag, Jacy L",
                "TSgt",
                "UHBYGVYT",
                "3D1X2",
                "SCXP",
                "NCOIC",
                date,
                "757-225-8454",
                "SMS Jackson",
                date,
                date,
                date,
                date,
                date
        );

        memberRepository.save(newMember);

        given()
                .port(port)
                .when()
                .get(MemberController.URI)
                .then()
                .statusCode(200)
                .body("[0].name", equalTo("Hoag, Jacy L"));
        memberRepository.deleteAll();
    }

    @Test
    public void addNewMemberTest() {
        Date date = new Date();
        Member newMember = new Member(
                "Hoag, Jacy L",
                "TSgt",
                "UHBYGVYT",
                "3D1X2",
                "SCXP",
                "NCOIC",
                date,
                "757-225-8454",
                "SMS Jackson",
                date,
                date,
                date,
                date,
                date
        );

        memberController.addMember(newMember);

        given()
                .port(port)
                .when()
                .get(MemberController.URI + "/save")
                .then()
                .statusCode(200)
                .body("[0].name", equalTo("Hoag, Jacy L"));
        memberRepository.deleteAll();
    }

    @Test
    public void updateMemberTest() {
        Date date = new Date();

        Member newMember = new Member(
                "Hoag, Jacy L",
                "TSgt",
                "UHBYGVYT",
                "3D1X2",
                "SCXP",
                "NCOIC",
                date,
                "757-225-8454",
                "SMS Jackson",
                date,
                date,
                date,
                date,
                date
        );

        memberController.addMember(newMember);

        Member updatedMember = new Member(
                "Hoag, Jacy L",
                "MSgt",
                "",
                "",
                "",
                "",
                date,
                "",
                "",
                date,
                date,
                date,
                date,
                date
        );

        String[] fields = new String[1];
        fields[0] = "grade";

        memberController.updateMember(updatedMember);

        given()
                .port(port)
                .when()
                .get(MemberController.URI + "/save")
                .then()
                .statusCode(200)
                .body("[0].grade", equalTo("MSgt"));
        memberRepository.deleteAll();
    }

    @Test
    public void DeletedMemberTest() {
        Date date = new Date();
        Member newMember1 = new Member(
                "Hoag, Jacy L",
                "TSgt",
                "UHBYGVYT",
                "3D1X2",
                "SCXP",
                "NCOIC",
                date,
                "757-225-8454",
                "SMS Jackson",
                date,
                date,
                date,
                date,
                date
        );
        Member newMember2 = new Member(
                "Zutell, Joshua M",
                "TSgt",
                "UHBYGVYT",
                "3D1X2",
                "SCXP",
                "NCOIC",
                date,
                "757-225-8454",
                "SMS Jackson",
                date,
                date,
                date,
                date,
                date
        );

        memberController.addMember(newMember1);
        memberController.addMember(newMember2);
        memberController.deleteMember(newMember1);


        given()
                .port(port)
                .when()
                .get(MemberController.URI + "/save")
                .then()
                .statusCode(200)
                .body("[0].name", equalTo("Zutell, Joshua M"));
        memberRepository.deleteAll();
    }
}
