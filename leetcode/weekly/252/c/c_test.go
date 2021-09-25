// Code generated by copypasta/template/leetcode/generator_test.go
package main

import (
	"github.com/EndlessCheng/codeforces-go/leetcode/testutil"
	"testing"
)

func Test(t *testing.T) {
	t.Log("Current test is [c]")
	examples := [][]string{
		{
			`1`, 
			`8`,
		},
		{
			`13`, 
			`16`,
		},
		{
			`1000000000`, 
			`5040`,
		},
		{
			`1000000000000000`,
			`-1`,
		},
	}
	targetCaseNum := 0 // -1
	if err := testutil.RunLeetCodeFuncWithExamples(t, minimumPerimeter, examples, targetCaseNum); err != nil {
		t.Fatal(err)
	}
}
// https://leetcode-cn.com/contest/weekly-contest-252/problems/minimum-garden-perimeter-to-collect-enough-apples/