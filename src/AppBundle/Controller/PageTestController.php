<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class PageTestController extends Controller
{
  /**
   * @Route("/page-test", name="page_test")
   */
  public function indexAction(Request $Request)
  {
    return $this->render('default/test-page.html.twig');
  }

  /**
   * @Route("/page-builder", name="page_builder")
   */
  public function buildPageAction(Request $Request)
  {
    return $this->render('default/page-builder.html.twig');
  }
}
