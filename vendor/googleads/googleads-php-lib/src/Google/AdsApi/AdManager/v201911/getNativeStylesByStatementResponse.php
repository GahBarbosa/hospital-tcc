<?php

namespace Google\AdsApi\AdManager\v201911;


/**
 * This file was generated from WSDL. DO NOT EDIT.
 */
class getNativeStylesByStatementResponse
{

    /**
     * @var \Google\AdsApi\AdManager\v201911\NativeStylePage $rval
     */
    protected $rval = null;

    /**
     * @param \Google\AdsApi\AdManager\v201911\NativeStylePage $rval
     */
    public function __construct($rval = null)
    {
      $this->rval = $rval;
    }

    /**
     * @return \Google\AdsApi\AdManager\v201911\NativeStylePage
     */
    public function getRval()
    {
      return $this->rval;
    }

    /**
     * @param \Google\AdsApi\AdManager\v201911\NativeStylePage $rval
     * @return \Google\AdsApi\AdManager\v201911\getNativeStylesByStatementResponse
     */
    public function setRval($rval)
    {
      $this->rval = $rval;
      return $this;
    }

}
