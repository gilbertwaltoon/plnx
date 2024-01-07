#
# This file is the busyBoxWebpage recipe.
# It also provides an example of adding a directory
# 'www' to the RFS
#
# TODO: The cp -r below is ugly. How to do with install -m
# 
#

SUMMARY = "Simple busyboxwebpage application"
SECTION = "PETALINUX/apps"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"



SRC_URI = "file://www \
		  "

S = "${WORKDIR}"

#do_compile() {
#	     oe_runmake
#}

do_install() {
	     install -d ${D}/
	     cp -r --no-preserve=ownership ${WORKDIR}/www ${D}/
}

FILES:${PN} += "/www"

