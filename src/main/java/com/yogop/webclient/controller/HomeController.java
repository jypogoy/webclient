package com.yogop.webclient.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Jeffrey Y. Pogoy
 * @created 14 Sep 2017 6:14 PM
 */
@Controller
public class HomeController {

    @RequestMapping("/")
    public String home(Model model) {
        model.addAttribute("name", "Jeffrey Pogoy");
        return "index";
    }

}
