package Apoint.WIneFInd.Kakao.Controller;

import Apoint.WIneFInd.Kakao.Service.KakaoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "${config.domain}", allowedHeaders = "*", allowCredentials = "true")
public class KakaoController {

    private final KakaoService kakaoService;

    public KakaoController(KakaoService kakaoService) {
        this.kakaoService = kakaoService;
    }

    @GetMapping("kakao")
    public String login(@RequestParam("code") String code, HttpSession session) {

        try {
            kakaoService.Create(code, session);
            return "Success Create";
        } catch (NullPointerException e) {
            return "" + e;
        }
    }

//    @RequestMapping(value="/kakao/logout")
//    public ModelAndView logout(HttpSession session) {
//        ModelAndView mav = new ModelAndView();
//
//        kakaoApi.kakaoLogout((String)session.getAttribute("accessToken"));
//        session.removeAttribute("accessToken");
//        session.removeAttribute("userId");
//        mav.setViewName("index");
//        return mav;
//    }

}