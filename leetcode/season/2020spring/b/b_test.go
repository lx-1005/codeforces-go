// Code generated by generator_test.
package main

import (
	"github.com/EndlessCheng/codeforces-go/leetcode/testutil"
	"testing"
)

func Test(t *testing.T) {
	t.Log("Current test is [b]")
	exampleIns := [][]string{{`5`, `[[0,2],[2,1],[3,4],[2,3],[1,4],[2,0],[0,4]]`, `3`}, {`3`, `[[0,2],[2,1]]`, `2`}}
	exampleOuts := [][]string{{`3`}, {`0`}}
	// TODO: 测试参数的下界和上界！
	// custom test cases or WA cases.
	//exampleIns = append(exampleIns, []string{``})
	//exampleOuts = append(exampleOuts, []string{``})
	targetCaseNum := 0
	if err := testutil.RunLeetCodeFuncWithCase(t, numWays, exampleIns, exampleOuts, targetCaseNum); err != nil {
		t.Fatal(err)
	}
}
// https://leetcode-cn.com/contest/season/2020-spring/problems/chuan-di-xin-xi-UGC/
