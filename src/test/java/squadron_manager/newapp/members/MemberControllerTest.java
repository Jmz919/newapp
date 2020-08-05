package squadron_manager.newapp.members;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import squadronManager.trainingAppTurbine.BaseIntegrationTest;
//import squadronManager.trainingAppTurbine.members.Member;
//import squadronManager.trainingAppTurbine.members.MemberRepository;
//
//import static io.restassured.RestAssured.given;
//import static org.hamcrest.Matchers.equalTo;
//
//import java.util.Date;
//
//public class MemberControllerTest extends BaseIntegrationTest {
//    @Autowired
//    private MemberRepository memberRepository;
//
//    @Test
//    public void getReturnsMembers() {
//        Date date = new Date();
//        Member newMember = new Member(
//                (long) 34768,
//                "Hoag, Jacy L",
//                "TSgt",
//                "UHBYGVYT",
//                "3D1X2",
//                "SCXP",
//                "NCOIC",
//                date,
//                "757-225-8454",
//                "SMS Jackson",
//                date,
//                date,
//                date,
//                date,
//                date
//        );
//
//        memberRepository.save(newMember);
//
//        given()
//                .port(port)
//                .when()
//                .get(MemberController.URI)
//                .then()
//                .statusCode(200)
//                .body("[0].name", equalTo("Hoag, Jacy L"));
//        memberRepository.deleteAll();
//    }
//}
